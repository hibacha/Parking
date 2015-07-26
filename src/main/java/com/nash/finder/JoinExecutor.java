package com.nash.finder;

import java.lang.reflect.Method;
import java.util.List;

public interface JoinExecutor {
	List joinObject(Method method, Object[] queryArgs);
}
