import { application } from '@/application'

application.listen(3001, () =>
  console.log(`HTTP Request Server Running 🚀 port:${3001}`),
)
