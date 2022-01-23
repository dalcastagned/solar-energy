import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { setInfo } from "../../services/Api";

export const UnityContext = createContext([]);

export function UnityProvider({ children }) {

    const [nickname, setNickname] = useState('')
    const [place, setPlace] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [active, setActive] = useState(false)
    const [error, setError] = useState({})

    function handleSubmit(event) {
        event.preventDefault();

        setError({
            nicknameError: (nickname.length < 1 ? true : false),
            placeError: (place.length < 1 ? true : false),
            brandError: (brand.length < 1 ? true : false),
            modelError: (model.length < 1 ? true : false)
        })

        if (nickname.length > 0 &&
            place.length > 0 &&
            brand.length > 0 &&
            model.length > 0) {
            setInfo(
                '/unidades',
                {
                    id: uuidv4(),
                    nickname: nickname,
                    place: place,
                    brand: brand,
                    model: model,
                    active: active
                }
            )
            setNickname('')
            setPlace('')
            setBrand('')
            setModel('')
            setActive(false)
        }
    }

    return (
        <UnityContext.Provider
            value={{
                nickname: nickname,
                setNickname: setNickname,
                brand: brand,
                setBrand: setBrand,
                place: place,
                setPlace: setPlace,
                model: model,
                setModel: setModel,
                active: active,
                setActive: setActive,
                error: error,
                setError: setError,
                handleSubmit: handleSubmit
            }}>
            {children}
        </UnityContext.Provider>
    )
}