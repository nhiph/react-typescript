import React, { type FC, type ReactNode } from 'react'

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
};

type WarningBoxProps = {
    mode: 'warning';
    children: ReactNode;
    severity: 'low' | 'medium' | 'high'; // ? la de khong truyen props nay van khong bao loi
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
    const { mode, children } = props;

    if (mode === 'hint') {
        return (
            <aside className='infobox infobox-hint'>
                <p>{children}</p>
            </aside>
        )
    }

    const { severity } = props;

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )

}

export default InfoBox
