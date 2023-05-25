import Bienvenida from '.';

export default {
  title: 'Contenedor',
  component: Bienvenida,
  args: {
    textoBienvenida: 'No hay tareas por ahora :)'
  }
}

const Template = (args: { textoBienvenida: string, hidden: boolean }) => <Bienvenida {...args} />

export const Default = Template.bind({});