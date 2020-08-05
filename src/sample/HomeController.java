package sample;

import javafx.fxml.FXML;
import javafx.scene.control.TextField;
import javafx.scene.input.KeyEvent;

public class HomeController {

  @FXML
  private TextField searchTxtField;

  @FXML
  void search(KeyEvent event) {
    System.out.println("Hello Dan!");
  }

}
