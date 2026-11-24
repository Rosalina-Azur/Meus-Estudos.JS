var res = document.getElementById('res')
document.getElementById('btn').addEventListener('click', vereficar)
const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
var hoje = new Date()
var ano = hoje.getFullYear()
var mes = hoje.getMonth() + 1
var dia = hoje.getDate()
const campos = {
    Ndia : document.getElementById('dia'),
    Nmes : document.getElementById('mes'),
    Nano : document.getElementById('ano')
    };
function preencher(select, lista){
    lista.forEach(([texto, valor]) => select.add(new Option(texto, valor)));
    }
    preencher(campos.Ndia, Array.from({length: 31}, (_,i) => [i + 1, i+1]));
    preencher(campos.Nmes, meses.map((nome, i) => [nome, i + 1]));
    preencher(campos.Nano, Array.from({length : ano - 1900 + 1}, (_, i) => [ano - i, ano - i]));

function vereficar(){
    if(campos.Ndia.value == '' || campos.Nmes.value == ''|| campos.Nano.value == '' || Number(campos.Nano.value) > ano){
        alert(`[ERRO] Verefique os dados e tente novamente`)
    }else {
        var fsex = document.getElementsByName('radgen')
        var IdA = ano - Number(campos.Nano.value)
        var IdM = mes - Number(campos.Nmes.value)
        var IdD = dia - Number(campos.Ndia.value)
        var gen = ''
        arquivo = ''
        if (IdD < 0){
            IdM--
            var mesAnterior = new Date(ano, -1, 0)
            IdD += mesAnterior.getDate()
        }
        if(IdM < 0){
            IdA--
            IdM += 12
        }
        if (fsex[0].checked) {
            gen = 'Homem'
        }else if (fsex[1].checked){
            gen = 'Mulher'
        }else if (fsex[2].checked){
            gen = '(Não informado)'

        }
        if(IdA >= 0 && IdA < 13){
                arquivo = 'Bebe.mp4'
            }else if (IdA >= 13 && IdA <30){
                arquivo = 'jovem.mp4'
            }else if(IdA >= 30 && IdA < 60){
                arquivo = 'adulto.mp4'
            }else{
                arquivo = 'idoso.mp4'
            }
        res.innerHTML = `${gen} com ${IdA} anos ${IdM} meses ${IdD} dias <br><video src='${arquivo}' autoplay muted loop playsinline width='100'></video>`
        
    }
}