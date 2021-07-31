import ToDoList from "../../components/todolist/ToDoList";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./index.css";

export default function Tasks() {
  const tasks = [
    {
      id:1,
      title: "Escrever Redação para Enem",
      description: "redação sobre o FGTS e o novo ajuste previdencial",
      checked: false,
    },
    {
      id:2,
      title: "Almoço para as Crianças",
      description: "carne frita com batata frita e feijão",
      checked: true,
    },
  ];
  return (
    <div>
      <h1>✔Minhas Atividades</h1>
      <h2>HOJE:</h2>
      <div className="container">
        <div className="row newtaskarea">
          <h3>Adicionar:</h3>
          <Form>
            <FormGroup>
              <Label>Titulo</Label>
              <Input type="text" className="w-50" name="title"></Input>
            </FormGroup>
            <FormGroup>
              <Label>Descricao</Label>
              <Input type="textarea" className="w-50" name="description" />
            </FormGroup>
          </Form>
        </div>
      </div>
      <div className="row tasks">
        <ToDoList data={tasks} />
      </div>
    </div>
  );
}