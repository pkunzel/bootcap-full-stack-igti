import React from 'react';
import '../App.css';
import GridContainer from './GridContainer.js'
import Result from './Result.js'


class ListInstallments {
    data = [];
    total = 0;
    interest = 0;
    numberInstallments = 0;

    getData = this.getData.bind(this);
    setTotal = this.setTotal.bind(this);
    setInterest = this.setInterest.bind(this);
    setNumberInstallments = this.setNumberInstallments.bind(this);
    UpdateData = this.UpdateData.bind(this);

    getData() {
        return this.data;
    }

    setTotal(total) {
        this.total = total;
        this.UpdateData(this.total, this.interest, this.numberInstallments);
    }

    setInterest(interest) {
        this.interest = interest;
        this.UpdateData(this.total, this.interest, this.numberInstallments);
    }

    setNumberInstallments(number) {
        this.numberInstallments = number;
        this.UpdateData(this.total, this.interest, this.numberInstallments);
    }

    UpdateData(total, interest, numberInstallments) {
        if (numberInstallments > 0) {
            for (let index = 0; index < numberInstallments; index++) {
                this.data.push({
                    number: index,
                    total: total,
                    interest: interest,
                    percentage: interest / total
                });
            }
        }

        console.log(this.data);
    };
}

function App() {
    let installments = new ListInstallments();

    return <>
        <h1>React - Juros Composto</h1>
        <GridContainer installments={installments} />
        <Result listInstallments={installments.getData()} />
    </>
}

export default App;
