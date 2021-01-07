import React, { useEffect, useState } from 'react';
import './Currency.css';
import CurrencyRow from '../CurrencyRow/CurrencyRow'
import Draggable from "react-draggable";

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState(1)
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
        if (data.base != null && firstCurrency != null) {
          fetch(`${BASE_URL}?base=${data.base}&symbols=${firstCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[firstCurrency]))
        }
      })
  }, [])

  useEffect(() => {
    if (fromCurrency === toCurrency){
      setExchangeRate(1)
      return
    }
    if (!!fromCurrency && !!toCurrency ) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => {if(!!data.rates){setExchangeRate(data.rates[toCurrency])}})
    }
  }, [fromCurrency, toCurrency])
  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
   
  }

  return (
    <Draggable>
    <div className="appcurrency">
      
        <h1 className="currency-title">Convert</h1>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <div className="equals">=</div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
     
    </div>
    </Draggable>
  );
}

export default Currency;