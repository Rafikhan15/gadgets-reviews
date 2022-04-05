import { useEffect, useState } from "react"

const useCart = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('ans.json')
            .then(res => res.json())
            .then(data => setCarts(data));
    }, []);

    return [carts, setCarts];
}

export default useCart;