package uis.entornos.taller.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uis.entornos.taller.Servicios.ProveedorServicio;
import uis.entornos.taller.Modelos.Proveedor;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/proveedores")
public class ProveedorControlador {
    @Autowired
    private ProveedorServicio proveedorServicio;

    @GetMapping("/list")
    public List<Proveedor> consultarTodo() {
        return (proveedorServicio.getProveedores());
    }

    @GetMapping("/list/{id}")
    public Proveedor buscarPorId(@PathVariable Integer id) {
        return proveedorServicio.getProveedor(id);
    }

    @PostMapping("/save")
    public ResponseEntity<Proveedor> agregarProveedor(@RequestBody Proveedor proveedor) {
        Proveedor proveedorNuevo = proveedorServicio.saveProveedor(proveedor);
        return new ResponseEntity<>(proveedorNuevo,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Proveedor> editarProveedor(@RequestBody Proveedor proveedor){
        Proveedor proveedorEditado = proveedorServicio.getProveedor(proveedor.getId());
        if (proveedorEditado != null) {
            proveedorEditado.setId(proveedor.getId());
            proveedorEditado.setCiudad(proveedor.getCiudad());
            proveedorEditado.setNombre(proveedor.getNombre());
            proveedorEditado.setDireccion(proveedor.getDireccion());
            proveedorEditado.setTelefono(proveedor.getTelefono());
            proveedorEditado.setNit(proveedor.getNit());
            proveedorServicio.saveProveedor(proveedorEditado);
        }else{
            return new ResponseEntity<>(proveedorEditado, HttpStatus.INTERNAL_SERVER_ERROR);
        }
            return new ResponseEntity<>(proveedorEditado,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Proveedor> eliminarProveedor(@PathVariable Integer id){
        Proveedor proveedor = proveedorServicio.getProveedor(id);
        if (proveedor != null) {
            proveedorServicio.deleteProveedor(id);
        }else{
            return new ResponseEntity<>(proveedor, HttpStatus.INTERNAL_SERVER_ERROR);
        }
            return new ResponseEntity<>(proveedor,HttpStatus.OK);
    }
}
