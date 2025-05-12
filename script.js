async function buscarIndicador() {
  const id = document.getElementById('indicador').value.trim();
  const url = `https://servicodados.ibge.gov.br/api/v1/paises/indicadores/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro na requisição");

    const data = await response.json();
    const resultadoDiv = document.getElementById('resultado');

    if (data.length === 0) {
      resultadoDiv.innerHTML = "Nenhum dado encontrado.";
      return;
    }
    let html = ''; 
    console.log(data);
    data.forEach(item => {
      html += `
        <div class="item">
          <div><strong>Indicador:</strong> ${item.indicador}</div>
          <div><strong>Unidade:</strong> ${item.unidade.id}</div>
        </div>
      `;
    });

    resultadoDiv.innerHTML = html; 

  } catch (error) {
    document.getElementById('resultado').innerHTML = "Erro ao buscar dados.";
    console.error(error);
  }
}
