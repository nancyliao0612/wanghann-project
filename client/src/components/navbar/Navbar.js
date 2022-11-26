import styled from "styled-components";
// images
import oncoDNA from "./images/Logo OncoDNA_Blue.png";
import wangHann from "./images/wang hann.svg";
import { ReactComponent as PointArrow } from "./images/point_arrow.svg";
// react-icon
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
// util
import { menuArray } from "./utils";
import { useState } from "react";

const NavWrapper = styled.nav`
  background-color: var(--color-white);
  opacity: 0.8;
  /* border: solid 1px; */
  padding: 0.8rem 1.2rem;
  padding-right: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    @media screen and (min-width: 648px) {
      display: none;
    }
  }

  @media screen and (min-width: 648px) {
    padding: 1.2rem 2.4rem;
  }
`;

const LogoContainer = styled.div`
  /* border: solid 1px; */
  display: flex;
  align-items: center;
  gap: 0.8rem;

  #logo {
    display: block;
    height: 3rem;
  }

  .line {
    width: 1px;
    height: 2.4rem;
    background: var(--color-primary);
  }

  @media screen and (min-width: 648px) {
    #logo {
      width: 10.5rem;
      height: 4.4rem;
    }
    .line {
      height: 3.6rem;
    }
  }
`;

const IconContainer = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  svg {
    font-size: 2.4rem;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 3.6rem;
  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: 648px) {
    display: none;
  }
`;

const MenuList = styled.div`
  background-color: var(--color-white);
  opacity: 0.8;
  position: fixed;
  width: 100%;
  height: 15.6rem;
  padding: 1.2rem 0;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    padding: 1.2rem;
  }
`;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuItemId, setMenuItemId] = useState(0);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <NavWrapper>
        <LogoContainer>
          <a
            href="https://www.oncodna.com/en/main/home/"
            target="_blank"
            id="logo"
          >
            <img src={oncoDNA} alt="OncoDNA Logo" />
          </a>
          <div className="line"></div>
          <a href="" id="logo">
            <img src={wangHann} alt="WangHann Logo" />
          </a>
        </LogoContainer>

        {/* screen < 648px */}
        <IconContainer onClick={handleClick} className="icon">
          {openMenu ? <IoMdClose /> : <IoMdMenu />}
        </IconContainer>

        {/* screen > 648px */}
        <MenuContainer>
          {menuArray.map(({ title, link }) => {
            return (
              <a href={link} key={title}>
                {title}
              </a>
            );
          })}
        </MenuContainer>
      </NavWrapper>
      {openMenu && (
        <MenuList>
          {menuArray.map(({ id, title, link }) => {
            return (
              <a
                href={link}
                key={title}
                onClick={() => {
                  setOpenMenu(false);
                  setMenuItemId(id);
                }}
              >
                <p>
                  <PointArrow
                    style={{
                      visibility: id === menuItemId ? "visible" : "hidden",
                    }}
                  />
                  {title}
                </p>
              </a>
            );
          })}
        </MenuList>
      )}
    </>
  );
};

export default Navbar;
