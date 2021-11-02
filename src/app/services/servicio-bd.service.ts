import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioBDService {

  public database: SQLiteObject;

  tipoUsuario: string = "CREATE TABLE IF NOT EXISTS tipoUsuario(id_usu_ti INTEGER PRIMARY KEY, nom_usu VARCHAR(20) NOT NULL);";
  usuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, nombre_cum VARCHAR(100) NOT NULL, alias_u VARCHAR(100) NOT NULL, email_u VARCHAR(100) NOT NULL, foto_u STRING(200), contrasena_u VARCHAR(20) NOT NULL, id_usu_ti INTEGER NOT NULL);";
  resena: string = "CREATE TABLE IF NOT EXISTS resena(id_comentario INTEGER PRIMARY KEY autoincrement, comentario  VARCHAR(200) NOT NULL, valor_com INTEGER NOT NULL, fecha_comen DATE NOT NULL,id_usuario INTEGER);";
  respondeRes: string = "CREATE TABLE IF NOT EXISTS respondeRes(id_resena INTEGER PRIMARY KEY autoincrement, respuesta_res VARCHAR(200) NOT NULL, id_comentario INTEGER NOT NULL);";
  resPro: string = "CREATE TABLE IF NOT EXISTS res_pro(id_res_pro INTEGER PRIMARY KEY autoincrement, id_comentario INTEGER NOT NULL, id_producto INTEGER NOT NULL);";
  marca: string = "CREATE TABLE IF NOT EXISTS marca(id_marca INTEGER PRIMARY KEY autoincrement, nom_mar VARCHAR(40) NOT NULL);";
  categoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria INTEGER PRIMARY KEY autoincrement, nom_cat VARCHAR(10) NOT NULL);";
  producto: string = "CREATE TABLE IF NOT EXISTS producto(id_producto INTEGER PRIMARY KEY autoincrement, n_producto VARCHAR(100) NOT NULL, precio INTERGER NOT NULL, valoracion INTERGER NOT NULL, des_pro VARCHAR(200) NOT NULL , color_pro VARCHAR(20) NOT NULL , foto_pr VARCHAR(40) NOT NULL, id_categoria INTEGER NOT NULL, id_marca INTEGER NOT NULL;";
  
  insertadm: string = "(INSERT or IGNORE INTO tipoUsuario(id_usu_ti, nom_usu) VALUES (1, 'Administrador'));";
  insertausu: string = "(INSERT or IGNORE INTO usuario(id_usuario));";

 listaProductos= new BehaviorSubject([]);
 listaUsuarios=new BehaviorSubject([]);

 private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(private platform: Platform, private sqlite: SQLite, public alertController: AlertController) { }


  //colsultar base de datos si esta lista
  dbState() {
    return this.isDbReady.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'perrigatos.db',
        location: 'default'

      }).then((db: SQLiteObject) => {
        this.database = db;
        //this.presentAlert("BD Creada");
        //llamamos a la creación de tablas
        this.crearTablas();
      }).catch(e => this.presentAlert(e));
    })
  }


  async crearTablas() {
    try {
      await this.database.executeSql(this.tipoUsuario, []);
      await this.database.executeSql(this.usuario, []);
      await this.database.executeSql(this.insertadm, []);
      this.buscarNoticias();
      this.buscarProductos();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentAlert("error crear tabla " + e);
    }
  }
  presentAlert(arg0: string) {
    throw new Error('Method not implemented.');
  }
  
  buscarProductos() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM producto', []).then(res => {
      let items: Producto[] = [];
      //this.presentAlert("b");
      if (res.rows.length > 0) {
        //this.presentAlert("c");
        for (var i = 0; i < res.rows.length; i++) { 
          //this.presentAlert("d");
          items.push({ 
            id: res.rows.item(i).id,
            titulo: res.rows.item(i).titulo,  
            texto: res.rows.item(i).texto
           });
        }
      }
      //this.presentAlert("d");
      this.listaProductos.next(items);
    });
  }




























}
