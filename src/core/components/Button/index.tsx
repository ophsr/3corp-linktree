import React from 'react';

type Props = {
    name: string;
    link: string;
}
const ButtonItem = ({ name, link }: Props) => (
    <a className="item col btn btn-outline-primary" href={link} role="button">{name}</a>
)
const ButtonItemDownload = ({ name, link }: Props) => (
    <a className="item col btn btn-outline-secondary" href={link} role="button" >{name}</a>
)
export { ButtonItem, ButtonItemDownload };