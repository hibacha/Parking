package com.nash.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="No such Order")
public class WrongDataTypeException extends RuntimeException {

}
