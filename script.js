var propiedades = ["IC Río Frio K49", "PSV La Unión K52", "PIV Danta K57", "PIV Toro Amarillo K57", "PSV SINAI K61", "PSV Guapiles K62", "PSV Molinos K64", "PSV Jimenez K67", "PSV Guacimo K73", "PSV Pocora K83", "Retorno K86", "PSV Herediana K90", "PSV La Francia K91", "PIV Cais Siquirres K95", "IC Siquirres", "Retorno K103", "Retorno K108", "Retorno K113", "PIV Barbilla K115", "PSV Matina K124", "APM Terminal K147", "IC Moin K148", "Retorno K152"];
    var totales = [11, 32, 5, 2, 17, 4, 9, 27, 5, 12, 0, 17, 4, 5, 36, 18, 13, 4, 28, 21, 3, 0, 16];
    var entregados = [4, 20, 2, 1, 13, 4, 7, 14, 3, 8, 0, 10, 3, 5, 21, 18, 6, 4, 15, 13, 1, 0, 13];
    
    var datos = {
      labels: propiedades,
      datasets: [
        {
          label: "Total Propiedades",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: totales
        },
        {
          label: "Entregados",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
          hoverBorderColor: "rgba(54, 162, 235, 1)",
          data: entregados
        }
      ]
    };
    
    var opciones = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    };
    
    var ctx = document.getElementById("grafico").getContext("2d");
    var grafico = new Chart(ctx, {
      type: 'bar',
      data: datos,
      options: opciones
    });


    const data1 = {
        labels: ['Tramo 1', 'Tramo 2', 'Tramo 3', 'Tramo 4', 'Tramo 5'],
        datasets: [
          {
            label: 'Total Propiedades',
            data: [32, 38, 110, 49, 18],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Propiedades entregadas',
            data: [26, 23, 82, 32, 10],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          },
        ],
      };
      
      const config = {
        type: 'radar',
        data: data1,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };
      
      var myChart = new Chart(document.getElementById('tramos'), config);


      var ctx = document.getElementById('resumen').getContext('2d');

		var resumen = new Chart(ctx, {
			type: 'polarArea',
			data: {
				labels: ['Inscritas', 'EFE-Efectiva', 'Construcción', 'EPV Firmado', 'EPV Gestión', 'Denegados', 'Desalojo - Demolición'],
				datasets: [{
					label: 'Cantidad',
					data: [145, 56, 65, 161, 66, 37, 30],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
						'rgba(255, 99, 132, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(255, 99, 132, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});