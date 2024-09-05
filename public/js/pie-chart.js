document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`/api/budget`, {
    method: "GET",
  });
  if (response.ok) {
    console.log(response);
    // console.log(response.json())
    const data = await response.json();
    console.log(data);
    console.log(data.expenses);
    const costs = data.expenses.map(expense => parseFloat(expense.cost))
    const labels = data.expenses.map(expense => expense.name)
    console.log(costs);
    const ctx = document.querySelector("#pie-chart");

    const settings = {
      labels: labels,
      datasets: [
        {
          label: "",
          data: costs,
          backgroundColor: [
            '#ff0000',
            '#0080ff',
            '#ffff00',
            '#8000ff',
            '#00ff00',
            '#ff0080',
            '#00ffff',
            '#ff8000',
            '#0000ff',
            '#80ff00',
            '#ff00f',
            '#00ff80'
          ],
          hoverOffset: 4,
        },
      ],
    };

    const config = {
      type: "doughnut",
      data: settings,
    };

    new Chart(ctx, config);
  }
});
