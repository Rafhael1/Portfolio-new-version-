import React from 'react'

import Link from 'next/link'

import {Dropdown} from 'react-bootstrap';
import LanguageIcon from '@material-ui/icons/Language';

export default function LanguageSelector() {
    return (
      <div style={{float: 'right'}} >
        <Dropdown>
        
            <Dropdown.Toggle className="DropdownMenu" variant="info" id="dropdown-basic">
            <LanguageIcon />
              Language
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item className="DropdownItems" href="/pt">Português</Dropdown.Item>
                <Dropdown.Item className="DropdownItems" href="/">English</Dropdown.Item>
                <Dropdown.Item className="DropdownItems" href="/es">Español</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

