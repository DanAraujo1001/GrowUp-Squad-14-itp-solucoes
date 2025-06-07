let dataTableInstance = null;

export function createOrUpdateDataTable(id, currentData) {
    if (!currentData) {
        console.warn("createOrUpdateDataTable: currentData está indefinido.");
        currentData = []; // Evita erro, mas a tabela ficará vazia
    }
    const mappedData = currentData.map(item => ({
        codigo_atendimento: item.codigo_atendimento,
        cliente: item.cliente,
        servico: item.servico,
        atendente: item.atendente,
        nota: item.nota,
        interacoes: item.interacoes
    }));

    const tableElement = $(`#${id}`);
    if (!tableElement.length) {
        console.error(`Elemento da DataTable '${id}' não encontrado.`);
        return;
    }

    try {
        if ($.fn.DataTable.isDataTable(tableElement)) {
            dataTableInstance = tableElement.DataTable();
            dataTableInstance.clear().rows.add(mappedData).draw();
            console.log("DataTable atualizada com", mappedData.length, "registros.");
        } else {
            dataTableInstance = tableElement.DataTable({
                data: mappedData,
                columns: [
                    { data: 'codigo_atendimento', title: 'Código' },
                    { data: 'cliente', title: 'Cliente' },
                    { data: 'servico', title: 'Serviço' },
                    { data: 'atendente', title: 'Atendente' },
                    { data: 'nota', title: 'Nota' },
                    { data: 'interacoes', title: 'Interações' }
                ],
                language: {
                    url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json'
                },
                destroy: true
            });
            console.log("DataTable criada com", mappedData.length, "registros.");
        }
    } catch (e) {
        console.error("Erro ao criar/atualizar DataTable:", e);
    }
}