// https://learn.javascript.ru/task/finally-or-code-after
// Сравните два фрагмента кода.

// Первый использует finally для выполнения кода после try..catch:

// try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// } finally {
//   очистить рабочее пространство
// }
// Второй фрагмент просто ставит очистку после try..catch:

// try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// }

// очистить рабочее пространство
// Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.

// Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы? Если такое преимущество есть, то дайте пример, когда оно проявляется.

// finally гарантирует очистку. См. решение на сайте.
