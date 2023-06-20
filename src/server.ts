import { application } from '@/application'
import { env } from '@/env'

application.listen(env.PORT, () =>
  console.log(`HTTP Request Server Running 🚀 port:${env.PORT}`),
)
