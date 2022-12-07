import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../store/slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) =>state.counter.value);
    const dispatch = useDispatch ();

    return (
        <div>
            <button onClick={() => dispatch(decrement(1))}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default Counter;