const servers = [
    {id:1, name:'server1'},
    {id:2, name:'server2'},
    {id:3, name:'server2'}
]

export const getAll = (req, res) => {
  res.status(200).json(servers)
}