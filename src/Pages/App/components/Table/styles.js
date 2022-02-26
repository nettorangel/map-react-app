import styled from "styled-components";
export const TableStyle = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border-bottom:none;
    border-right: none;
    width: 100%;
    heigth: 800px;
    font-family: "Lato-Bold";
    tr {
      margin: 50px;      
      &.invalid {
        td {
          color: #C0392B;
        }
      }
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: .8rem;
      border-bottom: 1px solid #B2BABB;
      border-right: none;
      text-align: start;
      color: #515A5A;
      :last-child {
        border-right: 0;
        text-align: end;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
    display: flex;
    justify-content: center;

    button {
      background: none;
      border: none;
    }
    button:disabled,
    button[disabled] {
      svg {
        fill: #D7DBDD;
      }
    }
  }
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  margin: 48px auto 0;
  border: 1px solid #B2BABB;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;