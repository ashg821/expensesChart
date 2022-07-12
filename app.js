async function fetchDataFromJson() {
    const res = await fetch('./data.json');
    const data = await res.json();
    return data;
}

async function consumeData() {
    const data = await fetchDataFromJson();
    const chartData = document.getElementById('chart-data');
    data.forEach((ele, index) => {
        chartData.innerHTML += `
        <div class="bar-container">
          <div class="bar-value" id="bar-value-${index + 1}">$${ele.amount}</div>
          <div class="bar" id="bar-${index + 1}"></div>
          ${ele.day}  
        </div>`;
        const barEle = document.getElementById(`bar-${index + 1}`);
        barEle.style.height = `${ele.amount + 5}%`;
    });
    data.forEach((ele, index) => {
        const barEle = document.getElementById(`bar-${index + 1}`);
        barEle.addEventListener('mouseenter', () => {
            const barVal = document.getElementById(`bar-value-${index + 1}`);
            barVal.style.visibility = 'visible';
            console.log(`Entered bar-${index + 1}`);
        });
        barEle.addEventListener('mouseleave', () => {
            const barVal = document.getElementById(`bar-value-${index + 1}`);
            barVal.style.visibility = 'hidden';
            console.log(`Left bar-${index + 1}`);
        });

    });
}


consumeData();
