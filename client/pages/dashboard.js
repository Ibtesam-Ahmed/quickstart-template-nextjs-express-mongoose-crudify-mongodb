import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  IconButton,
  Alert,
  Box,
  Paper,
  Snackbar,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  // Uncomment and use your auth token check if needed
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
      return;
    }
  
    const fetchItems = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(res.data);
      } catch (err) {
        setError('Failed to fetch items');
      }
    };
    fetchItems();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success' | 'error' | 'info' | 'warning'
  });
  
  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if (editId) {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/items/${editId}`,
          { name, description, price: Number(price) },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setItems(items.map((item) => (item._id === editId ? res.data : item)));
        setEditId(null);
        showSnackbar('Item updated successfully', 'success');
      } else {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/items`,
          { name, description, price: Number(price) },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setItems([...items, res.data]);
        showSnackbar('Item added successfully', 'success');
      }
      setName('');
      setDescription('');
      setPrice('');
      setError('');
    } catch (err) {
      const message = err.response?.data.message || 'Operation failed';
      setError(message);
      showSnackbar(message, 'error');
    }
  };
  

  const handleEdit = (item) => {
    setEditId(item._id);
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(items.filter((item) => item._id !== id));
      showSnackbar('Item deleted successfully', 'success');  // Show success snackbar
    } catch (err) {
      const message = err.response?.data.message || 'Delete failed';
      setError(message);
      showSnackbar(message, 'error');  // Show error snackbar
    }
  };
  

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 6,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
          p: { xs: 3, md: 5 },
          mb: 6,
        }}
      >
        <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 4,
  }}
>
  <Typography
    variant="h4"
    sx={{ fontWeight: '700', color: '#4a148c' }}
  >
    Dashboard
  </Typography>
  <Button variant="outlined" color="error" onClick={handleLogout}>
    Logout
  </Button>
</Box>


        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2, fontWeight: 'medium' }}>
            {error}
          </Alert>
        )}

        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 5,
            borderRadius: 3,
            backgroundColor: '#f3e5f5',
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Description"
              fullWidth
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Price"
              type="number"
              fullWidth
              margin="normal"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2, mr: 2 }}>
  {editId ? 'Update Item' : 'Add Item'}
</Button>
{editId && (
  <Button
    type="button"
    variant="outlined"
    sx={{ mt: 2 }}
    onClick={() => {
      setEditId(null);
      setName('');
      setDescription('');
      setPrice('');
      setError('');
    }}
  >
    Cancel
  </Button>
)}
            
          </form>
        </Paper>

        <Paper elevation={3} sx={{ borderRadius: 3, overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(item)} aria-label="edit">
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item._id)} aria-label="delete">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
      <Snackbar
  open={snackbar.open}
  autoHideDuration={3000}
  onClose={() => setSnackbar({ ...snackbar, open: false })}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
>
  <Alert
    onClose={() => setSnackbar({ ...snackbar, open: false })}
    severity={snackbar.severity}
    sx={{ width: '100%' }}
  >
    {snackbar.message}
  </Alert>
</Snackbar>
    </Box>

    
  );
}

