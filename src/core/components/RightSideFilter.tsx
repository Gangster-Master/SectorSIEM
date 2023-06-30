import styled from "styled-components";
import {useTranslation} from "react-i18next";
import React from "react";
import {Scrollbars} from "react-custom-scrollbars";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  transition: width .5s;

  .backdrop {
    width: 0;
    background-color: rgba(0, 0, 0, .5);
    transition: background-color 3s;
    height: 100%;
  }

  .sidebar {
    right: 0;
    width: 0;
    max-width: 80%;
    transition: width .5s;
  }

  &.show {
    .backdrop {
      width: 100vw;
    }

    .sidebar {
      width: 700px;
    }
  }
`;

const RightSideFilter = ({title, open = false, setOpen, children}: any) => {
    const {t} = useTranslation();

    return <SidebarContainer className={`${open ? 'show' : ''}`}>
        <div className={'backdrop'} onClick={() => {setOpen(false)}}></div>
        <div className={'position-absolute sidebar border-left p-3'}>
            <div className={'d-flex justify-content-between align-items-centersidebar-header'}>
                <div className={'h4'}>
                    {title || t('Filter')}
                </div>
                <div className={''}>
                    <i className="cursor-pointer fe fe-x" onClick={() => {setOpen(false)}}></i>
                </div>
            </div>
            <div className={'border my-2'} />
            <div className={'sidebar-content'}>
                <Scrollbars style={{height: '90vh'}}>
                    {children}
                </Scrollbars>
            </div>
        </div>

    </SidebarContainer>
}

export default RightSideFilter;
