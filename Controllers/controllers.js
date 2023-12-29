//Admin CRUD 
// UPDATE operation based on Category
const adminCrud = async (req, res) => {
      const { category } = req.params;
      if (category) {
            const { username, password, phone } = req.body;
        // Update query based on Category
            try {
                const [result] = await pool.query(
                    'UPDATE MyTable SET username=?, password=?, phone=? WHERE Category=?',
                    [username, password, phone, category]
                );
                res.json({ message: `Items in category ${category} updated successfully`, affectedRows: result.affectedRows });
                } 
                catch (error) {
                console.error('Error updating items in MySQL: ', error);
                res.status(500).json({ error: 'Failed to update items' });
                }
        // DELETE operation based on Category
            try {         
                    await pool.query('DELETE FROM users WHERE Category=?', [category]);   
                    res.json({ message: `Items in category ${category} deleted successfully`, affectedRows: result.affectedRows });
            } catch (error) {
                 console.error('Error deleting items in MySQL: ', error);
                res.status(500).json({ error: 'Failed to delete items' });
                }
                
     }} 

     module.exports = {
        adminCrud
     }
     