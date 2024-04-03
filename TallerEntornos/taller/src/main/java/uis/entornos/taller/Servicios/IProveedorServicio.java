package uis.entornos.taller.Servicios;

import java.util.List;
import uis.entornos.taller.Modelos.Proveedor;

public interface IProveedorServicio {

    public List<Proveedor> getProveedores();

    public Proveedor getProveedor(Integer id);

    public Proveedor saveProveedor(Proveedor proveedor);

    public void deleteProveedor(Integer id);
}
