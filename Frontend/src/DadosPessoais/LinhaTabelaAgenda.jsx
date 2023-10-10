export default function LinhaTabelaAgenda(props)
{
  return(
    <>
      <tr>
        <td>{props.carro}</td>
        <td>{props.data}</td>
      </tr>
    </>
  );
};