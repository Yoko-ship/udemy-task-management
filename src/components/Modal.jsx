import React from 'react'
import { createPortal } from 'react-dom'
import "./css/dialog.css"
function Modal({ref}) {

  return createPortal(
    <dialog ref={ref}>
        <h2>Ошибка</h2>
        <p>Вы заполнили не все обязательные поля</p>
        <p>Пожалуста,проверьте введённые данные и повторите попытку.</p>
        <form method='dialog'>
            <button>Закрыть</button>
        </form>
    </dialog>,document.getElementById("modal")
  )
}

export default Modal