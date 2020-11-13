package Utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader {
    private static Properties properties;

    public static void readFile(String filename) throws IOException {
        String path="src/test/resources/config/"+filename+".properties";
        FileInputStream input=null;
        try {
            input=new FileInputStream(path);
            properties=new Properties();
            properties.load(input);

        }catch (IOException e){
            e.printStackTrace();
        }finally {
            input.close();
        }


    }
    public  static String getProperty(String fileName, String keyValue) throws IOException {
        readFile(fileName);
        return properties.getProperty(keyValue);

    }
}
