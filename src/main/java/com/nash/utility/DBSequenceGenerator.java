package com.nash.utility;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.lang.reflect.Field;

import javax.persistence.SequenceGenerator;

import com.nash.model.Address;

public class DBSequenceGenerator<T> {
	private String seqName;
	private String schema;
	private static final String ID = "id";
	private static final String FORMAT_SEQUENCE_CREATE = "DROP SEQUENCE IF EXISTS %1$s.%2$s; CREATE SEQUENCE %1$s.%2$s START WITH 1 INCREMENT BY 1;";
	private static final String FILE_NAME = "sequence.sql";
	private static final String SCRIPT_DIRECTORY = "script";

	public void createSql(Class<T> clazz) throws Exception {
		Field id = clazz.getDeclaredField(ID);
		SequenceGenerator sg = id.getAnnotation(SequenceGenerator.class);
		seqName = sg.sequenceName();
		schema = sg.schema();
		System.out.println(System.getProperty("user.dir"));
		System.out.println(String.format(FORMAT_SEQUENCE_CREATE, schema,
				seqName));
		writeToFile();
	}

	private void writeToFile() throws IOException {
		String userDir = System.getProperty("user.dir");
		String targetFile = userDir + File.separator + SCRIPT_DIRECTORY
				+ File.separator + FILE_NAME;
		File file = new File(targetFile);
		if(!file.exists()){
			file.getParentFile().mkdirs(); 
			file.createNewFile();
		}
		FileOutputStream fos = new FileOutputStream(file);
		OutputStreamWriter writer = new OutputStreamWriter(fos);
		BufferedWriter bw = new BufferedWriter(writer);
		bw.write(String.format(FORMAT_SEQUENCE_CREATE, schema,
				seqName)+"\n");
		bw.close();
		
	}

	public static void main(String[] args) throws Exception {
		DBSequenceGenerator<Address> seq = new DBSequenceGenerator<Address>();
		seq.createSql(Address.class);

	}

}
