# EconomIA - Assistente Financeiro com IA

## 🚀 Como executar localmente

### Pré-requisitos
- .NET 9 SDK
- PostgreSQL
- Node.js (para o frontend Angular)

### Configuração

1. Clone o repositório
2. Copie `appsettings.Example.json` para `appsettings.json`
3. Configure suas credenciais no arquivo
4. Execute as migrations:
   ```bash
   dotnet ef database update --project src/EconomIA.Infrastructure