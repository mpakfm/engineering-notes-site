# Рабочие заметки инженера

MVP личного сайта «Рабочие заметки инженера» на Astro.

## Что реализовано

- Astro-проект со страницами:
  - `/`
  - `/notes/`
  - `/notes/[slug]/`
  - `/checklists/`
  - `/checklists/[slug]/`
  - `/about/`
- Контент через Astro Content Collections:
  - `notes`
  - `checklists`
  - `cases`
- Черновики `draft: true` исключаются из production-списков.
- Сохранены директории `docs/`, `design/`, `content/`.

## Запуск

```bash
npm install
npm run dev
npm run build
```

## Структура

- `src/content/` — коллекции и demo-контент.
- `src/pages/` — страницы MVP.
- `src/layouts/`, `src/components/`, `src/styles/` — общие части интерфейса.

## Ограничения MVP

- Нет БД/CMS/админки.
- Нет темной темы.
- Нет поиска и сложной интерактивности.
