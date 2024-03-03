import {useState} from "react";

const Darujme = ({projectId, currency}) => {
    const [amount, setAmount] = useState(1);
    const [frequency, setFrequency] = useState("once");


    const submitForm = () => {
        const url = `https://www.darujme.cz/darovat/${projectId}/?amount=${amount}&currency=${currency}&frequency=${frequency}`;
        // window.location.replace(url);
        window.open(url, '_blank').focus();
    }

    return <>
        <div style={WidgetStyle}>
            <div style={WidgetHeadStyle}>
                <div style={WidgetHeadTitleStyle}>
                    Pomozte nám pomáhat!
                </div>
            </div>
            <div style={WidgetBodyStyle}>
                <div style={FrequencyStyle}>
                    <div style={frequency === "once" ? FrequencyButtonActiveStyle : FrequencyButtonStyle}
                         onClick={() => setFrequency("once")}>
                        Jednorázově
                    </div>
                    <div style={frequency === "monthly" ? FrequencyButtonActiveStyle : FrequencyButtonStyle}
                         onClick={() => setFrequency("monthly")}>
                        Měsíčně
                    </div>
                </div>

                <div style={AmountBlockStyle}>
                    <input type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)}/>

                    <div style={WidgetEntriesStyle}>
                        <WidgetEntryItem amount={100} currency={currency} set={(a) => setAmount(a)}/>
                        <WidgetEntryItem amount={300} currency={currency} set={(a) => setAmount(a)}/>
                        <WidgetEntryItem amount={500} currency={currency} set={(a) => setAmount(a)}/>
                        <WidgetEntryItem amount={1000} currency={currency} set={(a) => setAmount(a)}/>
                        <WidgetEntryItem amount={2000} currency={currency} set={(a) => setAmount(a)}/>
                    </div>
                </div>

                <button style={SubmitButtonStyle}
                        onClick={submitForm}>Daruj {amount} {prettyCurrency(currency)}</button>

                <div>
                    zabezpečeno Darujme.cz
                </div>
            </div>
        </div>
    </>;
};

const WidgetEntryItem = ({amount, currency, set}) => {
    return (<div style={WidgetEntryStyle}
                 onClick={() => set(amount)}>
        {amount} {prettyCurrency(currency)}
    </div>);
}

const prettyCurrency = (currency) => {
    if (currency === "CZK") {
        return "Kč";
    }
    return currency;
}

const WidgetStyle = {
    fontSize: '14px',
    textAlign: 'center',
    color: '#0b3369',
    background: '#fff',
    width: '270px',
    maxWidth: '100%',
    overflow: 'hidden',
    border: '1px solid rgb(220, 220, 220)',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 18px 0px',
    height: '324px',
}

const WidgetHeadStyle = {
    padding: '10px 10px', background: '#f5f5f5', borderBottom: 'solid 2px #dcdcdc',
}

const WidgetHeadTitleStyle = {
    margin: '0.7em 0 0 0', fontSize: '14px', fontWeight: '700',
}

const WidgetBodyStyle = {
    padding: '10px 10px',
}

const FrequencyStyle = {
    marginBottom: '10px', position: 'relative',
    display: 'flex',
    justifyContent: 'center',
}

const FrequencyButtonStyle = {
    fontSize: '14px',
    position: 'relative',
    padding: '10px 5px 9px 5px',
    marginLeft: '5px',
    marginRight: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    letterSpacing: '0.3px',
    lineHeight: '1.2',
    fontWeight: '700',
    color: '#7c7c7c',
    border: '1px solid #cacaca',
    borderRadius: '3px',
    zIndex: '3',
    float: 'left',
}

const FrequencyButtonActiveStyle = {
    ...FrequencyButtonStyle, zIndex: '2', color: '#347ddf', borderColor: '#347ddf',
}

const AmountBlockStyle = {
    fontSize: '100%', verticalAlign: 'baseline',
}

const WidgetEntriesStyle = {
    paddingTop: '10px',
    zoom: '1', position: 'relative', margin: '0 -3px',
}

const WidgetEntryStyle = {
    float: 'left', padding: '3px', width: '30%', whiteSpace: 'nowrap',
    border: '1px solid #dcdcdc', cursor: 'pointer',
    margin: '1%',
    borderRadius: '5px',
}

const SubmitButtonStyle = {
    fontSize: '14px',
    position: 'relative',
    padding: '10px 5px 9px 5px',
    cursor: 'pointer',
    textAlign: 'center',
    letterSpacing: '0.3px',
    lineHeight: '1.2',
    fontWeight: '700',
    color: '#000',
    border: '1px solid #347ddf',
    borderRadius: '6px',
    margin: '12px 0',
    width: '100%',
    background: '#347ddf',
    overflow: 'hidden',
}

export default Darujme;
