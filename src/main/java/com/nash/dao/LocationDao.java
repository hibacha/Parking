package com.nash.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nash.model.Location;

@Repository
public interface LocationDao extends GenericDao<Location, Integer>{
  List<Location> findByAbbreviation(String name);
}
