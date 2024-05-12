import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { ADMIN_LINKS } from "../../constants/adminLinks";

const AdminPage = () => {
  const AdminContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin: 0 auto 3rem;
    max-width: 75rem;
    width: 100%;
  `;

  const Title = styled.h1`
    font-size: 2rem;
  `;

  const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `;

  const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.black};
    font-size: 1.2rem;
    padding: 0.5rem 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.black};
    }
  `;

  return (
    <AdminContainer>
      <Nav>
        {ADMIN_LINKS.map((link) => (
          <NavLink key={link.id} to={link.link}>
            {link.title}
          </NavLink>
        ))}
      </Nav>
      <Title>Панель администратора</Title>
      <Outlet />
    </AdminContainer>
  );
};

export default AdminPage;
