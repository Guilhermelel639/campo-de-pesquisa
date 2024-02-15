import Express from "express";

const routes = Express.Router()

let lista = ['wagner', 'wagner2','wagner3: a origem', 'wagner: de volta ao lar', 'wagner: longe de casa', 'wagner: guerra civil', 'wagner: a maldição do perola negra', 'wagne: espirito de vingança','wagner: jogos vorazes']

routes.get('/',(req,res)=>{
    return res.status(200).json(lista)
})

routes.get('/:produto', (req, res) => {
    const { produto } = req.params;
    try {
      const nome_existe = lista.find(item => item === produto);
      if (nome_existe) {
        return res.status(200).json('O nome existe');
      } else {
        return res.status(200).json('O nome não existe');
      }
    } catch (error) {
      return res.status(500).json('Erro ao processar a requisição');
    }
  });
export default routes