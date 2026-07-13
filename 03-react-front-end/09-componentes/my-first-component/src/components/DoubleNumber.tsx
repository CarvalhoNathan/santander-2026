interface Props {
    number: number;
}

export function DoubleNumber({ number }: Props) {
    return (
        <p>
            <b>Número: </b> {number} - <b>Dobro do número: </b> {number * 2}
        </p>
    );
}