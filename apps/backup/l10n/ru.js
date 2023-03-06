OC.L10N.register(
    "backup",
    {
    "Scan Backup Folder" : "Сканировать резервную папку",
    "Backup" : "Резервное копирование",
    "Update on all Backup's event" : "Обновление всех событий резервного копирования",
    "complete" : "завершить",
    "partial" : "частичный",
    "seconds" : "секунды",
    "minutes" : "минуты",
    "hours" : "часы",
    "days" : "дни",
    "A new restoring point ({type}) has been generated, requiring maintenance mode for {downtime}." : "Была создана новая точка восстановления ({type}), требующая режима обслуживания на {downtime}.",
    "Your system have been fully restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Ваша система была полностью восстановлена ​​на момент восстановления с {date} (приблизительная перемотка: {rewind})",
    "The file {file} have been restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Файл {file} был восстановлен на основе точки восстановления с {date} (приблизительная перемотка: {rewind})",
    "Backup now. Restore later." : "Сделайте резервную копию сейчас. Восстановить позже.",
    "The Backup App creates and stores backup images of your Nextcloud:\n\n- Backup the instance, its apps, your data and your database,\n- Administrator can configure the time slots for automated backup,\n- Full and Partial backup, with different frequencies,\n- 2-pass to limit downtime (maintenance mode) of your instance,\n- Compression and encryption,\n- Upload your encrypted backup on an external filesystem,\n- Download and search for your data,\n- Restore single file or the entire instance." : "Приложение Backup создает и хранит резервные образы вашего Nextcloud:\n\n- Резервное копирование экземпляра, его приложений, ваших данных и базы данных,\n- Администратор может настроить временные интервалы для автоматического резервного копирования,\n- Полное и частичное резервное копирование с разной частотой,\n- Двойной проход для ограничения времени простоя (режим обслуживания) вашего экземпляра,\n- Сжатие и шифрование,\n- Выгрузка зашифрованной резервной копии на внешнюю файловую систему,\n- Загрузка и поиск данных,\n- Восстановление одного файла или всего экземпляра.",
    "App Data" : "Данные приложения",
    "Choose where the backup app will initially store the restoring points." : "Выберите, где приложение резервного копирования будет изначально хранить точки восстановления.",
    "Path in which to store the data. (ex: app_data)" : "Путь, в котором хранятся данные. (например: app_data)",
    "Set as App Data" : "Установить как данные приложения",
    "Error" : "Ошибка",
    "Changing the App Data will delete the data stored in the previous one including restoring points." : "Изменение данных приложения приведет к удалению данных, хранящихся в предыдущем, включая точки восстановления.",
    "I understand some data will be deleted." : "Я понимаю, что некоторые данные будут удалены.",
    "Change the App Data" : "Изменить данные приложения",
    "Local storage" : "Локальное хранилище",
    "Unable to fetch app data" : "Не удалось получить данные приложения",
    "App data has been set" : "Данные приложения были установлены",
    "Unable to set app data" : "Невозможно установить данные приложения",
    "Restoring points locations" : "Восстановление точек локации",
    "Manage available storage locations for storing restoring points" : "Управление доступными местами хранения для хранения точек восстановления",
    "Path in which to store the restoring points. (ex: backups)" : "Путь, в котором хранятся точки восстановления. (например: backups)",
    "Add new external location" : "Добавить новое внешнее местоположение",
    "External storage" : "Внешнее хранилище",
    "Restoring point location" : "Восстановление местоположения точки",
    "Actions" : "Действия",
    "Delete" : "Удалить",
    "No external storage available" : "Нет доступного внешнего хранилища",
    "If you want to store your restoring points on an external location, configure an external storage in the \"External storage\" app." : "Если вы хотите хранить точки восстановления на внешнем хранилище, настройте внешнее хранилище в приложении «External storage».",
    "No external locations set" : "Внешние местоположения не заданы",
    "You can add a new location with the above form." : "Вы можете добавить новое местоположение с помощью формы выше.",
    "Unable to fetch external locations" : "Невозможно получить внешние местоположения",
    "New external location added" : "Невозможно получить внешние местоположения",
    "Unable to save new external location" : "Невозможно сохранить новое внешнее местоположение",
    "External location deleted" : "Внешнее местоположение удалено",
    "Unable to delete the external location" : "Невозможно удалить внешнее местоположение",
    "Backups configuration" : "Конфигурация резервных копий",
    "General configuration on how and when your restoring points are created." : "Общая конфигурация того, как и когда создаются ваши точки восстановления.",
    "Enable background tasks" : "Включить фоновые задачи",
    "You can enable background task for backups. This means that the creation, maintenance and purges of backups will be done automatically." : "Вы можете включить фоновое обслуживание резервных копий. Это означает, что создание, обслуживание и очистка резервных копий будет выполняться автоматически.",
    "Creation: New restoring points will be created according to the schedule." : "Создание: Новые точки восстановления будут создаваться в соответствии с расписанием.",
    "Maintenance: Restoring points will be packed and copied to potential external storages." : "Обслуживание: Точки восстановления будут запакованы и скопированы на доступные внешние хранилища.",
    "Purge: Old restoring points will be deleted automatically according to the retention policy." : "Очистка: Старые точки восстановления будут автоматически удалены в соответствии с правилами хранения.",
    "Enable background tasks to automatically manage creation, maintenance and purge." : "Включите фоновые задачи для автоматического управления созданием, обслуживанием и очисткой.",
    "Backup schedule" : "Расписание резервного копирования",
    "Limit restoring points creation to the following hours interval:" : "Ограничьте создание точек восстановления следующим интервалом времени:",
    "and" : "и",
    "Allow the creation of full restoring points during week day" : "Разрешить создавать точки полного восстановления по будням",
    "Time interval between two full restoring points" : "Временной интервал между двумя точками полного восстановления",
    "Time interval between two partial restoring points" : "Временной интервал между двумя точками частичного восстановления",
    "Packing processing" : "Процесс упаковки",
    "Processing that will be done on the restoring points during the packing step." : "Процессы, которые будут происходить с точками восстановления на этапе упаковки.",
    "Encrypt restoring points" : "Шифрование точек восстановления",
    "Compress restoring points" : "Сжать точки восстановления",
    "Retention policy" : "Правила сохранения",
    "You can specify the number of restoring points to keep during a purge." : "Вы можете указать количество точек восстановления, которые следует сохранить во время очистки.",
    "Policy for the local app data" : "Правила для локальных данных приложения",
    "Policy for external storages" : "Правила для внешних хранилищ",
    "Export backup configuration" : "Экспорт конфигурации резервного копирования",
    "You can export your settings with the below button. The exported file is important as it allows you to restore your backup in case of full data lost. Keep it in a safe place!" : "Вы можете экспортировать свои настройки с помощью кнопки снизу. Экспортированный файл имеет важное значение, так как он позволяет восстановить резервную копию в случае полной потери данных. Храните его в безопасном месте!",
    "Export configuration" : "Конфигурация экспорта",
    "Your settings export as been downloaded encrypted. To be able to decrypt it later, please keep the following private key in a safe place:" : "Ваши настройки экспортированы в зашифрованном виде. Чтобы иметь возможность расшифровать его, пожалуйста, храните этот закрытый ключ в безопасном месте:",
    "Request the creation of a new restoring point now" : "Запросите создание новой точки восстановления сейчас",
    "The creation of a restoring point as been requested and will be initiated soon." : "Создание точки восстановления по запросу будет начато в ближайшее время.",
    "Create full restoring point" : "Создать полную точку восстановления",
    "Requesting a backup will put the server in maintenance mode." : "Запрос резервной копии переведет сервер в режим обслуживания.",
    "I understand that the server will be put in maintenance mode." : "Я понимаю, что сервер будет переведен в режим обслуживания.",
    "Cancel" : "Отмена",
    "Request {mode} restoring point" : "Запросить {mode} точку восстановления",
    "Unable to fetch the settings" : "Не удалось получить настройки",
    "Settings saved" : "Настройки сохранены",
    "Unable to save the settings" : "Невозможно сохранить настройки",
    "Unable to request restoring point" : "Невозможно запросить точку восстановления",
    "Unable to export settings" : "Невозможно экспортировать настройки",
    "_A full restoring point will be created {delayFullRestoringPoint} day after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 any day of the week._::_A full restoring point will be created {delayFullRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 any day of the week._" : ["Полная точка восстановления будет создана через {delayFullRestoringPoint} ден после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 в любой день недели.","Полная точка восстановления будет создана через {delayFullRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 в любой день недели.","Полная точка восстановления будет создана через {delayFullRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 в любой день недели.","Полная точка восстановления будет создана через {delayFullRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 в любой день недели."],
    "_A full restoring point will be created {delayFullRestoringPoint} day after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 during weekends._::_A full restoring point will be created {delayFullRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 during weekends._" : ["Полная точка восстановления будет создана через {delayFullRestoringPoint} день после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 во время выходных.","Полная точка восстановления будет создана через {delayFullRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 во время выходных.","Полная точка восстановления будет создана через {delayFullRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 во время выходных.","Полная точка восстановления будет создана через {delayFullRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 во время выходных."],
    "_A partial restoring point will be created {delayPartialRestoringPoint} day after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 any day of the week._::_A partial restoring point will be created {delayPartialRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 any day of the week._" : ["Частичная точка восстановления будет создана через {delayPartialRestoringPoint} день после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 в любой день недели.","Частичная точка восстановления будет создана через {delayPartialRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 в любой день недели.","Частичная точка восстановления будет создана через {delayPartialRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 в любой день недели.","Частичная точка восстановления будет создана через {delayPartialRestoringPoint} дней после последней между {timeSlotsStart}:00 и {timeSlotsEnd}:00 в любой день недели."],
    "_day_::_days_" : ["день","дня","дней","дни"],
    "Scheduled" : "Запланированное",
    "Pending" : "В очереди",
    "Not completed" : "Не завершено",
    "Orphan" : "Сирота",
    "Completed" : "Выполнено",
    "Not packed yet" : "Еще не упаковано",
    "Packed" : "Упаковано",
    "Encrypted" : "Зашифровано",
    "Compressed" : "Сжатый",
    "Restoring points history" : "Восстановление истории точек",
    "List of the past and future restoring points" : "Список прошлых и будущих точек восстановления",
    "Issue" : "Проблема",
    "Health" : "Здоровье",
    "Status" : "Состояние",
    "Date" : "Дата",
    "ID" : "ID",
    "No issue" : "Нет проблем",
    "Local" : "Локальный",
    "Next full restoring point" : "Следующая точка полного восстановления",
    "Next partial restoring point" : "Следующая точка частичного восстановления",
    "Unable to fetch restoring points" : "Невозможно получить точки восстановления",
    "local" : "локальный"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");