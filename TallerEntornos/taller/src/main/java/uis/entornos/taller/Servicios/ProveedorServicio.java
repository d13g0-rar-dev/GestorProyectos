package uis.entornos.taller.Servicios;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uis.entornos.taller.Modelos.Proveedor;
import uis.entornos.taller.Repositorios.ProveedorRepositorio;

@Service
@Transactional
public class ProveedorServicio implements IProveedorServicio{
    @Autowired
    private ProveedorRepositorio proveedorRepo;

        @Override
        public List<Proveedor> getProveedores() {
            return proveedorRepo.findAll();
        }

        @SuppressWarnings("null")
        @Override
        public Proveedor getProveedor(Integer id) {
            return proveedorRepo.findById(id).orElse(null);
        }

        @SuppressWarnings("null")
        @Override
        public Proveedor saveProveedor(Proveedor proveedor) {
            return proveedorRepo.save(proveedor);
        }

        @SuppressWarnings("null")
        @Override
        public void deleteProveedor(Integer id) {
            proveedorRepo.deleteById(id);
        }
}
