import cl from './MyModal.module.css'
import React from "react";

type MyModalProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
}
type myModal = React.PropsWithChildren & MyModalProps

const MyModal = ({children , visible, setVisible} : myModal) => {

    const rootClasses = [cl.MyModal];
    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={cl.MyModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>

        </div>
    );
};

export default MyModal;