/** 
 * @return {import("react-apexcharts").Props} 
 */
export default function useRadarGraphOptions() {
    return {
        series: [70, 100, 40, 50, 60, 20],
        options: {
            labels: ['React', 'NodeJS', 'Nest', 'Redux', 'Sagas', "Python"],
            chart: {
                type: 'polarArea',
                foreColor: 'white'
                // height: "700px",
                // height: 380,
                // redrawOnWindowResize: true
            },
            legend: { show: false },
            stroke: { colors: ['#fff'] },
            fill: { opacity: 1 },
            plotOptions: {
                polarArea: {
                    rings: { strokeWidth: 0 },
                    spokes: { strokeWidth: 1 },
                }
            },
            responsive: [
                {
                    breakpoint: 1253,
                    options: { chart: { width: "700px" } }
                },
                {
                    breakpoint: 953,
                    options: { chart: { width: "500px" } }
                },
                {
                    breakpoint: 653,
                    options: { chart: { width: "300px" } }
                }
            ]
        }
    }
}