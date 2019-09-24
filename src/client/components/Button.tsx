import React, { FC } from 'react';
import css from 'styled-jsx/css';

const buttonStyle = css`
    button {
        color: white;
    }

    .default {
        background: blue;
    }

    .danger {
        background: red;
    }
`;

interface Props {
    type: 'default' | 'danger';
}

export const Button: FC<Props> = ({ type }) => (
    <button className={type}>
        ボタン<style jsx>{buttonStyle}</style>
    </button>
);
