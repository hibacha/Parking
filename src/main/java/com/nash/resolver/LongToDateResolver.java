package com.nash.resolver;

import java.util.Date;
import java.util.Map;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import org.springframework.web.servlet.HandlerMapping;

import com.nash.annotation.LongToDate;
import com.nash.annotation.LongToDate.RequestSource;

public class LongToDateResolver implements HandlerMethodArgumentResolver {

	public boolean supportsParameter(MethodParameter parameter) {
		return parameter.getParameterAnnotation(LongToDate.class) != null;
	}

	public Object resolveArgument(MethodParameter parameter,
			ModelAndViewContainer mavContainer, NativeWebRequest webRequest,
			WebDataBinderFactory binderFactory) throws Exception {
		LongToDate attr = parameter.getParameterAnnotation(LongToDate.class);

		if (attr.requestSource() == RequestSource.PATH_VARIABLE) {
			@SuppressWarnings("unchecked")
			Map<String, String> uriTemplateVars = (Map<String, String>) webRequest
					.getAttribute(
							HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE,
							RequestAttributes.SCOPE_REQUEST);
			return parseToDate(uriTemplateVars.get(attr.value()));
		} else {
			return parseToDate(webRequest.getParameter(attr.value()));
		}
	}

	private Date parseToDate(String timestamp) {
		return new Date(Long.parseLong(timestamp));
	}
}
