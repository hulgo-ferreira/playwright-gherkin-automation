# SwagLabs Playwright

Projeto de automação com Playwright + JavaScript, organizado para testes de UI e API.

## Estrutura

- `tests/ui` - testes de interface
- `tests/api` - testes de API
- `pages` - Page Objects
- `api/clients` - clientes para chamadas de API
- `api/schemas` - validações/helpers de contrato
- `fixtures` - fixtures customizadas do Playwright
- `data` - dados de teste
- `utils` - utilitários

## Comandos

```bash
npm install
npx playwright install
npm run test:ui
npm run test:api
npm test
npm run report
```

## Configuração

Copie `.env.example` para `.env` e ajuste `BASE_URL` e `API_URL` quando necessário.

> O teste de API de exemplo usa JSONPlaceholder para ser executável sem credenciais.
> Substitua os endpoints pelo contrato da API real do projeto.
