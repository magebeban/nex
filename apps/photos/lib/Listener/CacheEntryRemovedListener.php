<?php

namespace OCA\Photos\Listener;

use OCA\Photos\Album\AlbumMapper;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Cache\CacheEntryRemovedEvent;

class CacheEntryRemovedListener implements IEventListener {
	private AlbumMapper $albumMapper;

	public function __construct(AlbumMapper $albumMapper) {
		$this->albumMapper = $albumMapper;
	}

	public function handle(Event $event): void {
		if (!($event instanceof CacheEntryRemovedEvent)) {
			return;
		}

		try {
			// Remove node from all albums containing it.
			$albums = $this->albumMapper->getForFile($event->getFileId());

			foreach ($albums as $album) {
				$this->albumMapper->removeFile($album->getId(), $event->getFileId());
			}
		} catch(\Throwable $ex) {
			// If an error occur, return silently as we don't want to block the rest of the deletion process.
			// It happened already during migrations when the albums table is not yet created, but a folder is deleted by the theming app.
		}
	}
}
