#Тестовое задание для front-end разработчиков#

##Задача:##

Создать TODO-приложение.

##Описание приложения:##

Приложение позволяет вести ежедневный учёт дел пользователя. Сохранение изменений в БД не требуется – все манипуляции с данными сохраняются в объект. Вся представленная вёрстка является демонстрационной и не должна быть в том же виде в готовом приложении.

##Ограничения:##

* Запрещено использовать MVC фреймворки, библиотеки, позволяющие производить манипуляции с html при помощи данных;
* Запрещено использовать jQuery;
* Запрещено хранить данные любым образом в html;
* Запрещено использовать CSS-библиотеки с готовыми элементами.

##Процесс работы приложения:##

Изначально приложение выглядит следующим образом. Select позволяет выбрать тип данных, которые пользователь планирует записать в своём приложении.

Нажатие на select открывает меню выбора. Следует учитывать, что не смотря на то, что в задаче это не указано, поля для ввода, отображаемые после выбора той или иной опции селекта, должны различаться (например, title, time и address для Event и title, description, company, email, phone для Deal).

После выбора появляется возможность вводить данные. Кнопки «Сохранить» приложение не имеет, поэтому все изменения сохраняются моментально при вводе.
Нажав на «Add» пользователь может добавить ещё один элемент TODO-листа. Создать ещё один элемент можно только в случае, если все поля корректно заполнены. Нажатие на «Show list» показывает перечень имеющихся элементов TODO-листа с возможностью удаления. Реализация данного перечня на усмотрение разработчика приложения.

Кнопка «+» позволяет пользователю добавить аватар для записи из фиксированного набора. Получить массив изображений можно сделав get запрос на url == «http://somon-front.pakhomov.im/front_test_4321/». Из полученной коллекции пользователь самостоятельно выбирает понравившееся изображение и при клике на него оно становится выбранным для данной записи.

Оставшиеся поля пользователь заполняет текстовыми числовыми данными. Следует учитывать, что если поле имеет свой особый тип — необходимо проводить валидацию введенных данных (email, phone).

Оптимальное время разработки приложения — 4 часа