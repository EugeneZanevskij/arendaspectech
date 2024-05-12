import styled from "styled-components";

interface ITableProps {
  data: any[];
  handleDelete?: (id: number) => void;
  handleEdit: (id: number) => void;
}
const Table = ({ data, handleDelete, handleEdit }: ITableProps) => {
  const columns = Object.keys(data[0]);
  const toCapitalized = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{toCapitalized(column)}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={`${item.id}-${column}`}>{item[column]}</td>
            ))}
            <td>
              {handleDelete && (
                <DeleteButton onClick={() => handleDelete(item.id)}>
                  Удалить
                </DeleteButton>
              )}
              <EditButton onClick={() => handleEdit(item.id)}>Изменить</EditButton>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.darkGray};
  }

  th {
    background-color: ${({ theme }) => theme.lightGray};
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme.orange};
`;

const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.red};
`;

export default Table;
