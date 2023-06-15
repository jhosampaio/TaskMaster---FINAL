import { Task } from './app/shared/models/Task';
import { Information } from './app/shared/models/Information';


export const sample_tasks: Task[] = [
  {
    id: '1',
    name: 'Lavar louça',
    status: false,
  },
  {
    id: '2',
    name: 'Tirar o lixo',
    status: false,
  },
  {
    id: '3',
    name: 'Arrumar cama',
    status: false,
  },
  {
    id: '4',
    name: 'Lavar banheiro',
    status: false,

  },
  {
    id: '5',
    name: 'Lavar calçada',
    status: false,
  },
]

export const sample_informations: Information[] = [
  {
    description_home: 'A proposta do TaskMaster é proporcionar a você uma ferramenta eficiente e flexível para o gerenciamento de tarefas, permitindo que você se concentre no que é mais importante e alcance uma produtividade máxima.',
    description_task: '',
    description_dev: '',
    list_tech: '',
  },
]
